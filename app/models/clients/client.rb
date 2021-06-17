module Clients
  class Client < ApplicationRecord
    belongs_to :company, class_name: 'Companies::Company'
  end
end
