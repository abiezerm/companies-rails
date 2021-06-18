module Clients
  class GetAllClientsByClient < ApplicationService
    attr_reader :page_size, :page, :offset, :client_id

    def initialize(params)
      @page_size = params[:page_size] || 10
      @page = params[:page].positive? ? params[:page] - 1 : 0
      @offset = @page * @page_size
      @client_id = params[:client_id]
    end

    def call
      addresses = Addresses::Address.where(client_id: client_id)
      raise ActiveRecord::RecordNotFound.new('Not found', nil) if addresses.count.zero?

      total = addresses.count
      addresses = addresses
                  .order(created_at: :asc)
                  .limit(page_size)
                  .offset(offset)
      total_filtered = addresses.size
      Utils.paginate(addresses, page, page_size, total, total_filtered)
    end
  end
end
