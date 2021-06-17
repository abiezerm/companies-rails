Rails.application.routes.draw do
  namespace :api, as: nil, defaults: { format: 'json' } do
    namespace :v1 do
      get 'test' => 'test#index'

      resources :clients, only: %i[index]
      resources :companies, only: %i[index create]
    end

    get '/*path', to: lambda { |_env|
      [404, { 'Content-Type' => 'application/json' }, [JSON.generate({ message: 'Not found' })]]
    }
  end

  root 'react#index'
  get '/*path' => 'react#index'
end
