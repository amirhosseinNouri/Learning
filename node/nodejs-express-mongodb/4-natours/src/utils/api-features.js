const DEFAULT_PAGINATION_PAGE = 1;
const DEFAULT_PAGINATION_LIMIT = 100;

class APIFeatures {
  /**
   *
   * @param {string} query MongoDB query
   * @param {string} queryString Express query
   */
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  filter() {
    const queryObject = { ...this.queryString };
    const excludedFields = ['page', 'sort', 'limit', 'fields'];
    excludedFields.forEach((item) => delete queryObject[item]);

    // Range filtering
    const queryString = JSON.stringify(queryObject);
    const withMongoOperatorsQueryString = queryString.replace(
      /\b(gte|gt|lte|lt)\b/g,
      (match) => `$${match}`,
    );

    this.query = this.query.find(JSON.parse(withMongoOperatorsQueryString));
    return this;
  }

  sort() {
    const { sort } = this.queryString;
    if (sort) {
      const sortBy = sort.split(',').join(' ');
      this.query = this.query.sort(sortBy);
    } else {
      this.query = this.query.sort('-createdAt');
    }

    return this;
  }

  limitFields() {
    const { fields } = this.queryString;
    if (fields) {
      const selectingFields = fields.split(',').join(' ');
      this.query = this.query.select(selectingFields);
    } else {
      // Excluding
      this.query = this.query.select('-__v');
    }

    return this;
  }

  paginate() {
    const { page = DEFAULT_PAGINATION_PAGE, limit = DEFAULT_PAGINATION_LIMIT } =
      this.queryString;

    const skip = (page - 1) * limit;
    this.query = this.query.skip(skip).limit(limit);

    return this;
  }
}

module.exports = APIFeatures;
