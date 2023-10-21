provider "aws" {
  region = "p-southeast-1"
}

resource "aws_instance" "spectra-chat" {
  ami = "ami-0c55b159cbfafe1f0"
  instance_type = "t2.micro"
}

output "instance_ip" {
  value = aws_instance.spectra-chat.0c55b159cbfafe1f0.public_ip
}
