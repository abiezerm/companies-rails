module Companies
  class CreateCompany < ApplicationService
    attr_reader :name, :status, :phone

    def initialize(params = {})
      @name = params[:name]
      @status = params[:status]
      @phone = params[:phone]
    end

    def call
      @company = Companies::CreateCompanyForm.new(
        name: name,
        status: status,
        phone: phone
      )
      @company
    end
  end
end
