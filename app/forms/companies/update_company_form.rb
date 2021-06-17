module Companies
  class UpdateCompanyForm
    include ActiveModel::Model

    attr_accessor :id, :name, :status, :phone
    attr_reader :company

    STATUS_OPTIONS = %w[ACTIVE INACTIVE]

    validates :id, :name, :status, :phone, presence: true
    validates :phone, length: { minimum: 10, maximum: 15 }
    validates :status, inclusion: { in: STATUS_OPTIONS, message: 'Only permitted [ACTIVE, INACTIVE]' }

    def initialize(params = {})
      @company = Companies::Company.find(params[:id])
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
      @company.update(
        name: name,
        status: status,
        phone: phone
      )
    end
  end
end
