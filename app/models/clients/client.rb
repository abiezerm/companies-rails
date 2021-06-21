module Clients
  class Client < ApplicationRecord
    belongs_to :company, class_name: 'Companies::Company'
    has_many :addresses, class_name: 'Addresses::Address', dependent: :delete_all
    accepts_nested_attributes_for :addresses
  end
end
