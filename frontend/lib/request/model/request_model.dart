import 'dart:io';

class Request {
  final String date;
  final String description;
  final File policeReport;
  final String id;
  final String status;
  // final String supported_document;

  Request({
    required this.date,
    required this.description,
    required this.policeReport,
    required this.id,
    required this.status,
    // required this.supported_document,

  });

  factory Request.fromJson(Map<String, dynamic> json) {
    return Request(
      date: json['date'],
      description: json['description'],
      id: json['id'],
      policeReport: json['policeReport'],
      status: json['status'],
      // supported_document: json['supported_document']
    );
  }
}
