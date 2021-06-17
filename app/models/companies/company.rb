module Companies
  class Company < ApplicationRecord
    has_many :clients, class_name: 'Clients::Client'
  end
end
