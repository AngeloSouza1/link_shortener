Rails.application.routes.draw do
  get "home/index"
  # API para encurtamento de links
  namespace :api do
    namespace :v1 do
      resources :links, only: [:create]
    end
  end

  # Rota para redirecionamento de links encurtados
  get '/:short_url', to: 'api/v1/links#show', as: :short_link

  # Página inicial do front-end
  root 'home#index'
end
