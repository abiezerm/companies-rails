module Companies
  class CompanySerializer < ActiveModel::Serializer
    attributes :id, :name, :status, :phone, :clients

    has_many :clients
  end
end
