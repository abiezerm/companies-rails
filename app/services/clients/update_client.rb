module Clients
  class UpdateClient < ApplicationService
    attr_reader :id, :first_name, :last_name, :phone, :email, :title

    def initialize(id = nil, params = {})
      Rails.logger.info(id || params[:id])
      @id = id || params[:id]
      @first_name = params[:first_name]
      @last_name = params[:last_name]
      @phone = params[:phone]
      @email = params[:email]
      @title = params[:title]
    end

    def call
      @client = Clients::UpdateClientForm.new(
        id: id,
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
