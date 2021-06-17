Rails.application.routes.draw do
  namespace :api, as: nil, defautls: { format: 'json' } do
    namespace :v1 do
      get 'test' => 'test#index'
    end
    get '/*path', to: lambda { |_env|
      [404, { 'Content-Type' => 'application/json' }, [JSON.generate({ message: 'Not found' })]]
    }
  end

  root 'react#index'
  get '/*path' => 'react#index'
end
