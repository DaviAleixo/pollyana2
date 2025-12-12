// Apenas mostrando as partes que precisam ser corrigidas no useEffect

// ❌ CÓDIGO ANTIGO (LINHAS 63-119) - SUBSTITUIR POR:

useEffect(() => {
  const loadData = async () => {
    try {
      // ✅ CORRETO: await nas chamadas assíncronas
      const fetchedAllCategories = await categoriesService.getAll();
      
      // ✅ Validação de array
      const validCategories = Array.isArray(fetchedAllCategories) ? fetchedAllCategories : [];
      
      setAllCategories(validCategories);
      setMainCategories(validCategories.filter(c => c.parentId === null));

      if (isEditing && id) {
        const product = await productsService.getById(parseInt(id));
        
        if (product) {
          setFormData({
            nome: product.nome,
            preco: product.preco,
            descricao: product.descricao,
            imagem: product.imagem,
            categoriaId: product.categoriaId,
            ativo: product.ativo,
            visivel: product.visivel,
            estoque: product.estoque,
          });
          setMainImagePreview(product.imagem);

          if (product.tipoTamanho) setTipoTamanho(product.tipoTamanho);
          if (product.cores) {
            setStandardColorsWithImages(product.cores.filter(c => !c.isCustom));
            setCustomColors(product.cores.filter(c => c.isCustom));
            if (product.cores.some(c => c.isCustom)) setCustomColorsEnabled(true);
          }
          if (product.variants) setVariants(product.variants);
          setImagesRequiredForColors(product.imagesRequiredForColors || false);

          setDiscountActive(product.discountActive || false);
          setDiscountType(product.discountType || 'percentage');
          setDiscountValue(product.discountValue || 0);
          setDiscountExpiresAt(product.discountExpiresAt || '');

          setIsLaunch(product.isLaunch || false);
          setLaunchExpiresAt(product.launchExpiresAt || '');

          const productCategory = validCategories.find(c => c.id === product.categoriaId);
          if (productCategory) {
            if (productCategory.parentId !== null) {
              setSelectedMainCategoryId(productCategory.parentId);
            } else {
              setSelectedMainCategoryId(productCategory.id);
            }
          }
        } else {
          navigate('/admin/produtos');
        }
      } else {
        // Para novos produtos, define a categoria padrão como 'Todos' (ID 1)
        setFormData(prev => ({ ...prev, categoriaId: 1 }));
        setSelectedMainCategoryId(1);
      }
    } catch (error) {
      console.error('Erro ao carregar dados:', error);
      setAllCategories([]);
      setMainCategories([]);
      navigate('/admin/produtos');
    }
  };

  loadData();
}, [id, isEditing, navigate]);