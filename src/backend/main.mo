import List "mo:core/List";
import Order "mo:core/Order";

actor {
  type Enquiry = {
    name : Text;
    phone : Text;
    email : Text;
    suburb : Text;
    propertyType : Text;
    message : Text;
    timestamp : Int;
  };

  module Enquiry {
    public func compare(e1 : Enquiry, e2 : Enquiry) : Order.Order {
      if (e1.timestamp < e2.timestamp) { #less } else if (e1.timestamp > e2.timestamp) {
        #greater;
      } else { #equal };
    };
  };

  let enquiries = List.empty<Enquiry>();

  public shared ({ caller }) func submitEnquiry(name : Text, phone : Text, email : Text, suburb : Text, propertyType : Text, message : Text) : async () {
    let newEnquiry : Enquiry = {
      name;
      phone;
      email;
      suburb;
      propertyType;
      message;
      timestamp = Time.now();
    };
    enquiries.add(newEnquiry);
  };

  public query ({ caller }) func getAllEnquiries() : async [Enquiry] {
    enquiries.toArray().sort();
  };
};
