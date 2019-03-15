export  class CharityRequestsModel {
    code: string;
    msg: string;
    data : [
        {
            ein : string,
            charityName : string,
            url : string,
            donationUrl : string,
            city : string
        }

    ]
  }