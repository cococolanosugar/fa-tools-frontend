export namespace main {
	
	export class LoginInput {
	    username: string;
	    password: string;
	    auto_login: boolean;
	    type: string;
	
	    static createFrom(source: any = {}) {
	        return new LoginInput(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.username = source["username"];
	        this.password = source["password"];
	        this.auto_login = source["auto_login"];
	        this.type = source["type"];
	    }
	}

}

