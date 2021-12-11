CREATE DATABASE bioreactor_api;
USE bioreactor_api;

CREATE TABLE fechas(
	id SERIAL PRIMARY KEY,
	fecha DATE
);
CREATE TABLE ph(
	id SERIAL PRIMARY KEY,
	pH FLOAT
);
CREATE TABLE temperature(
	id SERIAL PRIMARY KEY,
	temperatura FLOAT
);