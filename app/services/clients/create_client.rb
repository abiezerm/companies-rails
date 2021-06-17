module Clients
  class CreateClient < ApplicationService
    attr_reader :first_name, :last_name, :phone, :email, :title, :company_id

    def initialize(params = {})
      @first_name = params[:first_name]
      @last_name = params[:last_name]
      @phone = params[:phone]
      @email = params[:email]
      @title = params[:title]
      @company_id = params[:company_id]
    end

    def call
      @client = Clients::CreateClientForm.new(
        first_name: first_name,
        last_name: last_name,
        phone: phone,
        email: email,
        title: title,
        company_id: company_id
      )
      @client
    end
  end
end
