import { Request, Response } from "express";
import prisma from "../database/prismaClient";

export default class CreateContactController {
  async handle(request: Request, response: Response) {
    const { firstName, lastName, phoneNumber } = request.body;

    const hasOnlyNumbers = /^\d+$/.test(phoneNumber);
    if (!hasOnlyNumbers) {
      return response.status(400).json({
        error: "Invalid phone number. Should have only numbers characters.",
      });
    }

    try {
      const contact = await prisma.contact.create({
        data: { firstName, lastName, phoneNumber },
      });

      return response.status(201).json({ data: contact });
    } catch (e) {
      const missingFields = Object.keys({ firstName, lastName, phoneNumber })
        .filter((key) => !request.body[key])
        .join(", ");

      return response
        .status(400)
        .json({ error: `Invalid or missing: ${missingFields}.` });
    }
  }
}
