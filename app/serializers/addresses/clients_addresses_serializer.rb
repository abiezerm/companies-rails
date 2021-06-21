module Addresses
  class ClientsAddressesSerializer < ActiveModel::Serializer
    attributes :id, :address1, :address2, :zip_code, :city, :country
  end
end
