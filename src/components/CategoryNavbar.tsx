import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { categoriesService } from '../services/categories.service';
import { Category } from '../types';

export default function CategoryNavbar() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [subcategories, setSubcategories] = useState<Record<number, Category[]>>({});
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        setLoading(true);
        
        // Carrega categorias de nível superior
        const topLevel = await categoriesService.getTopLevelCategories();
        
        // Validação extra: garante que é array
        const validTopLevel = Array.isArray(topLevel) ? topLevel : [];
        const visibleCategories = validTopLevel.filter(c => c && c.visivel);
        
        setCategories(visibleCategories);

        // Carrega subcategorias para cada categoria
        const subsMap: Record<number, Category[]> = {};
        
        for (const category of visibleCategories) {
          if (category && category.id) {
            try {
              const subs = await categoriesService.getSubcategories(category.id);
              // Validação extra: garante que é array
              const validSubs = Array.isArray(subs) ? subs : [];
              subsMap[category.id] = validSubs.filter(c => c && c.visivel);
            } catch (subError) {
              console.error(`Erro ao carregar subcategorias da categoria ${category.id}:`, subError);
              subsMap[category.id] = [];
            }
          }
        }
        
        setSubcategories(subsMap);
      } catch (error) {
        console.error('Erro ao carregar categorias:', error);
        setCategories([]);
        setSubcategories({});
      } finally {
        setLoading(false);
      }
    };

    loadCategories();

    // Recarrega quando houver mudanças
    const handleStorageChange = () => {
      loadCategories();
    };

    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  if (loading) {
    return (
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center items-center h-14">
            <div className="animate-pulse text-gray-400">Carregando categorias...</div>
          </div>
        </div>
      </nav>
    );
  }

  if (!Array.isArray(categories) || categories.length === 0) {
    return (
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center space-x-8 h-14 overflow-x-auto">
            <Link
              to="/catalogo"
              className="text-sm font-medium text-gray-700 hover:text-black transition-colors whitespace-nowrap"
            >
              TODAS AS CATEGORIAS
            </Link>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center space-x-8 h-14 overflow-x-auto">
          {/* Link para "Todas" */}
          <Link
            to="/catalogo"
            className="text-sm font-medium text-gray-700 hover:text-black transition-colors whitespace-nowrap"
          >
            TODAS
          </Link>

          {/* Categorias principais */}
          {categories.map((category) => {
            if (!category || !category.id) return null;

            const categorySubcategories = subcategories[category.id] || [];
            const hasSubs = Array.isArray(categorySubcategories) && categorySubcategories.length > 0;

            return (
              <div
                key={category.id}
                className="relative"
                onMouseEnter={() => hasSubs && setHoveredCategory(category.id)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                <Link
                  to={`/catalogo/${category.slug || category.id}`}
                  className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-black transition-colors whitespace-nowrap"
                >
                  <span>{(category.nome || 'Sem nome').toUpperCase()}</span>
                  {hasSubs && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* Dropdown de subcategorias */}
                {hasSubs && hoveredCategory === category.id && (
                  <div className="absolute left-0 top-full mt-2 bg-white border border-gray-200 shadow-lg rounded-md py-2 min-w-[200px] z-50">
                    {categorySubcategories.map((sub) => {
                      if (!sub || !sub.id) return null;
                      
                      return (
                        <Link
                          key={sub.id}
                          to={`/catalogo/${sub.slug || sub.id}`}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                        >
                          {sub.nome || 'Sem nome'}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </nav>
  );
}