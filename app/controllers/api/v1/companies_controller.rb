module Api
  module V1
    class CompaniesController < ApiController
      def index
        options = {
          page_size: params[:pageSize] ? params[:pageSize].to_i : 10,
          page: params[:page] ? params[:page].to_i : 1
        }

        @data = Companies::GetAllCompanies.call(options)

        api_success_pagination(@data, { each_serializer: Companies::CompanySerializer }, 200)
      end
    end
  end
end
