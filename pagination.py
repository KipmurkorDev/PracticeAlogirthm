class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self):
        """Cached dataset
        """
        if self.__dataset is None:
           pass

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10):
            pass