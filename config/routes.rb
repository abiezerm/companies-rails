Rails.application.routes.draw do
  namespace :api, as: nil, defaults: { format: 'json' } do
    namespace :v1 do
      resources :clients, only: %i[index create show update destroy] do
        resources :addresses, only: %i[index create show update destroy], constraints: { id: /\d.+/ }
      end
      resources :companies, only: %i[index create show update destroy]
    end

    get '/*path', to: lambda { |_env|
      [404, { 'Content-Type' => 'application/json' }, [JSON.generate({ message: 'Not found' })]]
    }
  end

  root 'react#index'
  get '/*path' => 'react#index'
end
