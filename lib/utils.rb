class Utils < LibPaginate
  def paginate(data, page, page_size, total, total_filtered)
    {
      data: data,
      page: page + 1,
      total: total,
      total_pages: total_filtered < (page + 1) ? 1 : (total.to_f / page_size).ceil,
      total_filtered: total_filtered
    }
  end
end
