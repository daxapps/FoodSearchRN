import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.yelp.com/v3/businesses',
	headers: {
		Authorization:
			'Bearer -N0VTYdiB_LQHf5DLIXXadiLhVTRdPhPJB2APvtGd14bJHSQCBkaOhGr31oKv8tF7vHiJeHiQkOriEZaV3SUya0fQXV3AUcgPka3ILBkI_TQiKQ2dYPhq4kz4RkBXXYx'
	}
});
