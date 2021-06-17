module Companies
  class CompanyClientSerializer < ActiveModel::Serializer
    attributes :id, :name, :status, :phone
  end
end
