module Clients
  class AddAddressForm
    include ActiveModel::Model

    attr_accessor :address1, :address2, :zip_code, :city, :country, :client_id
    attr_reader :address

    validates :address1, :address2, :zip_code, :city, :country, :client_id, presence: true

    def initialize(params = {})
      Rails.logger.info(params[:client_id])
      @client = Clients::Client.find(params[:client_id])
      @address = Addresses::Address.new(params)
      super(params)
    end

    def save
      if valid?
        persit!
        true
      else
        false
      end
    end

    def persit!
      @client.addresses << [@address]
    end

    private

    def address_is_valid
      errors.add(:address, 'is invalid') if @address.invalid?
    end
  end
end
