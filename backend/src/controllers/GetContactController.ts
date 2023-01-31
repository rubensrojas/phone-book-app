import { Request, Response } from "express";
import prisma from "../database/prismaClient";

export default class GetContactController {
  async many(request: Request, response: Response) {
    try {
      const contacts = await prisma.contact.findMany();

      return response.status(200).json(contacts);
    } catch (e) {
      return response.status(400).json({ error: e });
    }
  }

  async unique(request: Request, response: Response) {
    const { id } = request.params;

    try {
      const contact = await prisma.contact.findUnique({
        where: { id: Number(id) },
      });

      return response.status(200).json(contact);
    } catch (e) {
      return response
        .status(404)
        .json({ error: `Could not find contact id: ${id}` });
    }
  }
}
