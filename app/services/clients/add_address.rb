module Clients
  class AddAddress < ApplicationService
    attr_reader :address1, :address2, :zip_code, :city, :country, :client_id

    def initialize(client_id = nil, params = {})
      @address1 = params[:address1]
      @address2 = params[:address2]
      @zip_code = params[:zip_code]
      @city = params[:city]
      @country = params[:country]
      @client_id = client_id || params[:client_id]
    end

    def call
      @address = Clients::AddAddressForm.new(
        address1: @address1,
        address2: @address2,
        zip_code: @zip_code,
        city: @city,
        country: @country,
        client_id: @client_id
      )
      @address
    end
  end
end
