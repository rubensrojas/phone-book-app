import { Request, Response } from "express";
import prisma from "../database/prismaClient";

export default class DeleteContactController {
  async handle(request: Request, response: Response) {
    const { id } = request.body;

    try {
      const contact = await prisma.contact.delete({
        where: { id },
      });

      return response.status(204).json({ data: contact });
    } catch (e) {
      return response
        .status(404)
        .json({ error: `Did not found contact id: ${id}.` });
    }
  }
}
