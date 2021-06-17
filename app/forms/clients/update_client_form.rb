module Clients
  class UpdateClientForm
    include ActiveModel::Model

    attr_accessor :id, :first_name, :last_name, :phone, :email, :title
    attr_reader :client

    validates :id, :first_name, :last_name, :phone, :email, :title, presence: true
    validates :phone, length: { minimum: 10, maximum: 15 }
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP, message: 'Email is invalid' }

    validates_presence_of :email, if: :email_changed?

    def initialize(params = {})
      @client = Clients::Client.find(params[:id])
      Rails.logger.info(client.attributes)
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
      @client.update(
        first_name: first_name,
        last_name: last_name,
        phone: phone,
        email: email,
        title: title
      )
    end

    def email_changed?
      errors.add(:email, 'Email already exists') if @client.email != email && Clients::Client.exists?(email: email)
    end
  end
end
