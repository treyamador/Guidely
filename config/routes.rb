Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :pages, only: [:show, :create]
  root 'pages#index'
end
