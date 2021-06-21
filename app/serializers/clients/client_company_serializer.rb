module Clients
  class ClientCompanySerializer < ActiveModel::Serializer
    attributes :id, :first_name, :last_name, :phone, :email, :title, :company, :addresses

    def company
      Companies::CompanyClientSerializer.new(object.company).attributes if object.company
    end

    def addresses
      object.addresses.map do |address|
        Addresses::ClientsAddressesSerializer.new(address)
      end
    end
  end
end
