"use strict";
export class APIRepository {
    #baseAddress;
    #objectName;
    // Constructs the repository
    // baseAddress : string
    //    The URL of the base address. e.g."https://somehost/api/somename"
    // objectName : string 
    //    The name of the object. e.g. pet
    constructor(baseAddress, objectName) {
        this.#baseAddress = baseAddress;
        this.#objectName = objectName;
    }

    // Retrieves all the objects (GET)
    // Returns: JSON
    // Throws: Error - if there was an HTTP error.
    async readAll() {
        const address = `${this.#baseAddress}/all`;
        const response = await fetch(address);
        if (!response.ok) {
            throw new Error(`There was an HTTP error getting the ${this.#objectName} data.`);
        }
        return await response.json();
    }

    // Retrievas one object (GET)
    // Returns: JSON
    // Throws: Error - if there was an HTTP error.
    async read(id) {
        const address = `${this.#baseAddress}/one/${id}`;
        const response = await fetch(address);
        if (!response.ok) {
            throw new Error(`There was an HTTP error getting the ${this.#objectName} data.`);
        }
        return await response.json();
    }

    // Creates a new object (POST)
    // formData : FormData
    // Returns: JSON
    // Throws: Error - if there was an HTTP error.
    async create(formData) {
        const address = `${this.#baseAddress}/create`;
        const response = await fetch(address, {
            method: "post",
            body: formData
        });
        if (!response.ok) {
            throw new Error(`There was an HTTP error creating the ${this.#objectName} data.`);
        }
        return await response.json();
    }

    // Updates an existing object (PUT)
    // formData : FormData
    // Returns: text
    // Throws: Error - if there was an HTTP error.
    async update(formData) {
        const address = `${this.#baseAddress}/update`;
        const response = await fetch(address, {
            method: "put",
            body: formData
        });
        if (!response.ok) {
            throw new Error(`There was an HTTP error updating the ${this.#objectName} data.`);
        }
        return await response.text();
    }

    // Deletes an object (PUT)
    // id : string - The id if the object
    // Returns: text
    // Throws: Error - if there was an HTTP error.
    async deletePet(id) {
        const address = `${this.#baseAddress}/delete/${id}`;
        const response = await fetch(address, {
            method: "delete"
        });
        if (!response.ok) {
            throw new Error(`There was an HTTP error deleting the ${this.#objectName} data.`);
        }
        return await response.text();
    }

}
