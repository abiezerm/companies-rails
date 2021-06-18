module Clients
  class CreateClientForm
    include ActiveModel::Model

    attr_accessor :first_name, :last_name, :phone, :email, :title, :company_id, :addresses_attributes
    attr_reader :client

    validates :first_name, :last_name, :phone, :email, :title, :company_id, presence: true
    validates :phone, length: { minimum: 10, maximum: 15 }
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP, message: 'Email is invalid' }
    validates :company_id, numericality: { only_integer: true }

    validate :client_company_is_exists
    validate :client_email_is_unique

    def initialize(params = {})
      @client = Clients::Client.new(params)
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
      @client.save!
    end

    private

    def client_is_valid
      errors.add(:client, 'is invalid') if @client.invalid?
    end

    def client_company_is_exists
      errors.add(:company, "Company #{company_id} not exists") unless Companies::Company.exists?(id: company_id)
    end

    def client_email_is_unique
      errors.add(:email, 'Email already exists') if Clients::Client.exists?(email: email)
    end
  end
end
