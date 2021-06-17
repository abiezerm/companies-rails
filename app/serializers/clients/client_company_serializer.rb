module Clients
  class ClientCompanySerializer < ActiveModel::Serializer
    attributes :id, :first_name, :last_name, :phone, :email, :title, :company

    def company
      Companies::CompanyClientSerializer.new(object.company).attributes
    end
  end
end
