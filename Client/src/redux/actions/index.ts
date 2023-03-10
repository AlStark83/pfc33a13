import { Dispatch } from "redux";
import axios from "axios";

const endPointBaseURL = "https://backend-kanehoteltravel-production.up.railway.app"

interface GetCitiesAction {
	type: "GET_CITIES";
	payload: any;
}

interface GetActivitiesAction {
	type: "GET_ACTIVITIES";
	payload: any;
}

interface GetHotelsAction {
	type: "GET_HOTELS";
	payload: any;
}

interface GetDetailActivitiesAction {
	type: "GET_DETAIL_ACTIVITIE";
	payload: any;
}

interface GetHotelDetail {
	type: "GET_HOTEL_DETAIL";
	payload: any;
}

export type Action =
	| GetCitiesAction
	| GetActivitiesAction
	| GetHotelsAction
	| GetDetailActivitiesAction
	| GetHotelDetail;

export const getCities = () => (dispatch: Dispatch) => {
	fetch(`${endPointBaseURL}/city`)
		.then((res) => res.json())
		.then((json) => dispatch({ type: "GET_CITIES", payload: json }));
	// dispatch({type: "GET_CITIES", payload: data.results})
};

export const getActivities = (name: any) => (dispatch: Dispatch) => {
	fetch(`${endPointBaseURL}/activity?city=${name}&order=ASC`)
		.then((res) => res.json())
		.then((json) =>
			dispatch({ type: "GET_ACTIVITIES", payload: json[0].activities })
		);
};

export const getHotels = (name:any) => (dispatch:Dispatch) => {
    fetch(`${endPointBaseURL}/hotel?city=${name}&filter=Economic&order=ASC`)
    .then(res => res.json())
    .then(json => dispatch({type: "GET_HOTELS", payload: json[0].hotels}))
}

export const getActivityDetail = (id: any) => (dispatch: Dispatch) => {
	fetch(`${endPointBaseURL}/activity/${id}`)
		.then((res) => res.json())
		.then((json) => dispatch({ type: "GET_DETAIL_ACTIVITIE", payload: json }));
};

export const getHotelDetail = (id: any) => (dispatch: Dispatch) => {
	fetch(`${endPointBaseURL}/hotel/${id}`)
		.then((res) => res.json())
		.then((json) => dispatch({ type: "GET_HOTEL_DETAIL", payload: json }));
};
