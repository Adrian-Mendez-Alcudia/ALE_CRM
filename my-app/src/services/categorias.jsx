async function getCategorias(){
    const {data} = await supabase.from("categorias").select();
    if (error) throw error;
    return data
  }