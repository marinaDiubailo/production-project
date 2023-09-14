import { EntityState } from '@reduxjs/toolkit';
import { IComment } from 'entities/Comment';

export interface ArticleCommentsSchema extends EntityState<IComment> {
    isLoading?: boolean;
    error?: string;
}
