module Addresses
  class ClientsAddressesSerializer < ActiveModel::Serializer
    attributes :id, :address1, :address1, :zip_code, :city, :country
  end
end
