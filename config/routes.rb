Rails.application.routes.draw do
  get "/hello", to: "application#hello_world"

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  get '/', to: 'sessions#new', as: 'root'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get "/me", to: "users#show"

  # get '/signup', to: 'users#new', as:'signup'
  # post '/signup', to: 'users#create'

  resources :users
  resources :organizations

end
