module Clients
  class GetAllClients < ApplicationService
    attr_reader :page_size, :page, :offset

    def initialize(params)
      @page_size = params[:page_size] || 10
      @page = params[:page].positive? ? params[:page] - 1 : 0
      @offset = @page * @page_size
    end

    def call
      total = Clients::Client.count
      clients = Clients::Client.order(created_at: :asc).limit(page_size).offset(offset)
      total_filtered = clients.size
      Utils.paginate(clients, page, page_size, total, total_filtered)
    end
  end
end
