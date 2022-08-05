export interface Highlights {
	value: String,
	matchLevel: String,
	matchedWords: Array<String>,
}

export interface Hit {
	created_at: string,
	title: String,
	url: string,
	author: String,
	points: Number,
	story_text?: String,
	comment_text?: String,
	num_comments: Number,
	story_id?: String,
	story_title?: String,
	story_url?: String,
	parent_id?: String,
	created_at_i: Number,
	relevancy_score: Number,
	_tags: Array<String>,
	objectID: String,
	_highlightResult: {
		title: Highlights,
		url: Highlights,
		author: Highlights
	}
}

export interface Result {
	hits: Array<Hit>,
	nbHits: Number,
	page: Number,
	nbPages: Number,
	hitsPerPage: Number,
	exhaustiveNbHits: Boolean,
	exhaustiveTypo: Boolean,
	query: String,
	params: String,
	processingTimeMS: Number,
	processingTimingsMS: {
		afterSearch: {
			total: Number
		},
		total: Number
	}
}
