module Addresses
  class Address < ApplicationRecord
    belongs_to :client, class_name: 'Clients::Client'
  end
end
