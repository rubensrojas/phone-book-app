import { Request, Response } from "express";
import prisma from "../database/prismaClient";

export default class UpdateContactController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { firstName, lastName, phoneNumber } = request.body;

    const hasOnlyNumbers = /^\d+$/.test(phoneNumber);
    if (!hasOnlyNumbers) {
      return response.status(400).json({
        error: "Invalid phone number. Should have only numbers characters.",
      });
    }

    try {
      const contact = await prisma.contact.update({
        where: { id: Number(id) },
        data: { firstName, lastName, phoneNumber },
      });

      return response.status(201).json({ data: contact });
    } catch (e) {
      return response
        .status(404)
        .json({ error: `Did not found contact id: ${id}.` });
    }
  }
}
