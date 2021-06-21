module Companies
  class GetAllClientsByCompany < ApplicationService
    attr_reader :page_size, :page, :offset, :company_id

    def initialize(params)
      @page_size = params[:page_size] || 10
      @page = params[:page].positive? ? params[:page] - 1 : 0
      @offset = @page * @page_size
      @company_id = params[:company_id]
    end

    def call
      Rails.logger.info('paso por aqui')
      Rails.logger.info(company_id)
      clients = Clients::Client.where(company_id: company_id)
      # raise ActiveRecord::RecordNotFound.new('Not found', nil) if clients.count.zero?

      total = clients.count
      clients = clients
                .order(created_at: :desc)
                .limit(page_size)
                .offset(offset)
      total_filtered = clients.size
      Utils.paginate(clients, page, page_size, total, total_filtered)
    end
  end
end
