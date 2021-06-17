module Clients
  class CreateClient < ApplicationService
    attr_reader :first_name, :last_name, :phone, :email, :title

    def initialize(params = {})
      @first_name = params[:first_name]
      @last_name = params[:last_name]
      @phone = params[:phone]
      @email = params[:email]
      @title = params[:title]
    end

    def call
      @client = Clients::CreateClientForm.new(
        first_name: first_name,
        last_name: last_name,
        phone: phone,
        email: email,
        title: title
      )
      @client
    end
  end
end
