module Companies
  class UpdateCompany < ApplicationService
    attr_reader :id, :name, :status, :phone

    def initialize(id = nil, params = {})
      @id = params[:id] || id
      @name = params[:name]
      @status = params[:status]
      @phone = params[:phone]
    end

    def call
      @company = Companies::UpdateCompanyForm.new(
        id: id,
        name: name,
        status: status,
        phone: phone
      )
      @company
    end
  end
end
