import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: {
      app_name: "Book Store App",
      app_menu_web: "Web",
      app_menu_store: "Store",
      app_menu_translate: "Translate",
      book_title: "Title",
      book_author: "Author",
      book_category: "Category",
      book_published_on: "Published on",
      book_search_input: "Search books in the web",
      book_search: "Search",
      book_search_error: "It was not possible to fetch books. Please, try again later",
      book_store: "Store",
      book_store_sucess: "Book stored!",
      book_store_error: "It was not possible to store this book. Please, try again later",
      book_view: "View",
      book_delete: "Delete",
      book_delete_confirmation: "Are you sure you wish to delete {{book}}",
      book_delete_error: "It was not possible to delete this book. Please, try again later",
      "Sort By": "Sort By",
      "Page size": "Page size",
      "5 per page": "5 per page",
      "10 per page": "10 per page",
      "50 per page": "50 per page",
      "Unknown": "Unknown"
    }
  },
  pt: {
    translation: {
      app_name: "Livraria App",
      app_menu_web: "Web",
      app_menu_store: "Loja",
      app_menu_translate: "Traduzir",
      book_title: "Título",
      book_author: "Autor",
      book_category: "Categoria",
      book_published_on: "Publicado em",
      book_search_input: "Buscar livros na web",
      book_search: "Buscar",
      book_search_error: "Ocorreu um problema durante a pesquisa. Por favor, tente mais tarde",
      book_store: "Armazenar",
      book_store_sucess: "Livro armazenado!",
      book_store_error: "Ocorreu um problema ao armazenar este livro. Por favor, tente mais tarde",
      book_view: "Visualizar",
      book_delete: "Remover",
      book_delete_confirmation: "Tem certeza que deseja remover {{book}}",
      book_delete_error: "Ocorreu um problema ao remover este livro. Por favor, tente mais tarde",
      "Sort By": "Ordenar",
      "Page size": "Itens por pagina",
      "5 per page": "5",
      "10 per page": "10",
      "50 per page": "50",
      "Unknown": "Desconhecido"
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;