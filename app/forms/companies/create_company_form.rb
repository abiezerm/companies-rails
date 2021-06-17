module Companies
  class CreateCompanyForm
    include ActiveModel::Model

    attr_accessor :name, :status, :phone
    attr_reader :company

    STATUS_OPTIONS = %w[ACTIVE INACTIVE]

    validates :name, :status, :phone, presence: true
    validates :phone, length: { minimum: 10, maximum: 15 }
    validates :status, inclusion: { in: STATUS_OPTIONS, message: 'Only permitted [ACTIVE, INACTIVE]' }

    def initialize(params = {})
      @company = Companies::Company.new(params)
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
      @company.save!
    end

    private

    def company_is_valid
      errors.add(:company, 'is invalid') if @company.invalid?
    end
  end
end
